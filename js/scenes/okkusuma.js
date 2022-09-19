export const init = async model => {
    let head = model.add('sphere').move(0, 1.35, 0).scale(0.1, 0.1, 0.1);
    let neck = model.add('tubeY').move(0, 1.25, 0).scale(0.04);
    let chest = model.add('cube').move(0, 1.1, 0).scale(0.2, 0.1, 0.05);
    let stomach = model.add('cube').move(0, 0.9, 0).scale(0.1, 0.1, 0.05);
    let waist = model.add('sphere').move(0, 0.7, 0).scale(0.17, 0.13, 0.05);

    let left_leg = model.add().move(0, 0.6, 0)

    let hip1 = left_leg.add('sphere').move(0, 0.0, 0).scale(0.04, 0.04, 0.04);
    let thigh1 = left_leg.add('tubeY').move(0, .6 - 0.47, 0).scale(0.04, 0.1, 0.05);
    let lower_leg_left = left_leg.add().move(0, .6 - 0.35, 0)
    let knee1 = lower_leg_left.add('sphere').move(0, 0, 0).scale(0.04, 0.04, 0.04);
    let leg1 = lower_leg_left.add('tubeY').move(0, -.14, 0).scale(0.04, 0.11, 0.05);
    let feet1 = lower_leg_left.add('cube').move(0, -.25, 0).scale(0.04, 0.02, 0.1);

    left_leg.move(.15, 0, 0);

    let right_leg = model.add().move(0, .6, 0)

    let hip2 = right_leg.add('sphere').move(0, 0, 0).scale(0.04, 0.04, 0.04);
    let thigh2 = right_leg.add('tubeY').move(0, .6 - 0.47, 0).scale(0.04, 0.1, 0.05);
    let lower_leg_right = right_leg.add().move(0, 0.6 - 0.35, 0)
    let knee2 = lower_leg_right.add('sphere').move(0, 0, 0).scale(0.04, 0.04, 0.04);
    let leg2 = lower_leg_right.add('tubeY').move(0, -0.14, 0).scale(0.04, 0.11, 0.05);
    let feet2 = lower_leg_right.add('cube').move(0, -0.25, 0).scale(0.04, 0.02, 0.1);


    right_leg.move(-0.15, 0, 0);

    let right_hand = model.add().move(0, 1.17, 0)

    let sh1 = right_hand.add('sphere').move(0, 0, 0).scale(0.04, 0.04, 0.04);
    let bicep1 = right_hand.add('tubeY').move(0, 1.17 - 1.05, 0).scale(0.04, 0.08, 0.05);
    let lower_hand_right = right_hand.add().move(0, 1.17 - 0.93, 0)
    let bone1 = lower_hand_right.add('sphere').move(0, 0, 0).scale(0.04, 0.04, 0.04);
    let arm1 = lower_hand_right.add('tubeY').move(0, -0.10, 0).scale(0.04, 0.08, 0.05);
    let hand1 = lower_hand_right.add('sphere').move(0, -0.18, 0).scale(0.04, 0.04, 0.04);

    right_hand.move(.23, 0, 0);

    let left_hand = model.add().move(0, 1, 17, 0)
    let sh2 = left_hand.add('sphere').move(0, 0, 0).scale(0.04, 0.04, 0.04);
    let bicep2 = left_hand.add('tubeY').move(0, 1.17 - 1.05, 0).scale(0.04, 0.08, 0.05);
    let lower_hand_left = left_hand.add().move(0, 1.17 - 0.93, 0)
    let bone2 = lower_hand_left.add('sphere').move(0, 0, 0).scale(0.04, 0.04, 0.04);
    let arm2 = lower_hand_left.add('tubeY').move(0, -0.1, 0).scale(0.04, 0.08, 0.05);
    let hand2 = lower_hand_left.add('sphere').move(0, -0.18, 0).scale(0.04, 0.04, 0.04);
    left_hand.move(-0.23, 0, 0);

    let angle_max = 225 * 3.1415 / 180
    let angle_min = 135 * 3.1415 / 180
    let angle_min_hand = 45 * 3.1415 / 180
    let direction_inc_left = .2
    let direction_inc_right = -.2


    let direction_left = 180 * 3.1415 / 180
    let direction_right = 180 * 3.1415 / 180

    let stage = 0
    let robot_location_z = 0
    let robot_location_x = 0
    let move_robot_z = true
    let robot_location_z_inc = -.025
    let robot_location_x_inc = -.025
    let rotate_robot = false
    let move_robot_x = false
    let robot_angle = 0
    let robot_final = 90 * 3.1415 / 180
    model.animate(() => {

        if (direction_left > angle_max) {
            direction_inc_left = -.2
        }
        if (direction_left < angle_min) {
            direction_inc_left = .2
        }

        if (direction_right > angle_max) {
            direction_inc_right = -.2
        }
        if (direction_right < angle_min) {
            direction_inc_right = .2
        }
        right_leg.identity().move(-0.15, .6, 0).turnX(direction_right)
        lower_leg_right.identity().move(0, 0.6 - 0.35, 0).turnX(direction_left - angle_min_hand)
        left_leg.identity().move(0.15, .6, 0).turnX(direction_left)
        lower_leg_left.identity().move(0, .6 - 0.35, 0).turnX(direction_right - angle_min_hand)
        right_hand.identity().move(.23, 1.17, 0).turnX(direction_right)
        lower_hand_right.identity().move(0, 1.17 - 0.93, 0).turnX(direction_right + angle_min_hand)
        left_hand.identity().move(-0.23, 1.17, 0).turnX(direction_left)
        lower_hand_left.identity().move(0, 1.17 - 0.93, 0).turnX(direction_left + angle_min_hand)
        direction_left += direction_inc_left
        direction_right += direction_inc_right
        model.identity().move(robot_location_x, 0, robot_location_z).turnY(robot_angle)

        if (move_robot_z) {
            robot_location_z += robot_location_z_inc
        }
        if (move_robot_x) {
            robot_location_x += robot_location_x_inc
        }
        if (rotate_robot) {
            robot_angle += .05
        }

        if (stage === 0 && robot_location_z < -1) {
            stage = 1
            rotate_robot = true
            move_robot_z = false
        }
        if (stage === 1 && robot_angle >= robot_final) {
            stage = 2
            rotate_robot = false
            move_robot_x = true
        }
        if (stage === 2 && robot_location_x < -1) {
            stage = 3
            rotate_robot = true
            move_robot_x = false
        }
        if (stage === 3 && robot_angle >= 2 * robot_final) {
            stage = 4
            rotate_robot = false
            move_robot_z = true
            robot_location_z_inc = robot_location_z_inc * -1
        }
        if (stage === 4 && robot_location_z >= 0) {
            stage = 5
            rotate_robot = true
            move_robot_z = false
            robot_location_z_inc = robot_location_z_inc * -1
        }

        if (stage === 5 && robot_angle >= 3 * robot_final) {
            stage = 6
            rotate_robot = false
            move_robot_x = true
            robot_location_x_inc = robot_location_x_inc * -1
        }
        if (stage === 6 && robot_location_x >= 0) {
            stage = 7
            rotate_robot = true
            move_robot_x = false
            robot_location_x_inc = robot_location_x_inc * -1
        }
        if (stage === 7 && robot_angle >= 4 * robot_final) {
            stage = 0
            rotate_robot = false
            move_robot_z = true
            robot_angle = 0
        }
    })

}