/**
 * @author       Richard Davey <rich@phaser.io>
 * @copyright    2013-2025 Phaser Studio Inc.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Contains = require('./Contains');

/**
 * Determines whether the specified point is contained within the rectangular region defined by this Rectangle object.
 *
 * @function Phaser.Geom.Rectangle.ContainsPoint
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rect - The Rectangle object.
 * @param {Phaser.Geom.Point} point - The point object to be checked. Can be a Phaser Point object or any object with x and y values.
 *
 * @return {boolean} A value of true if the Rectangle object contains the specified point, otherwise false.
 */
var ContainsPoint = function (rect, point)
{
    return Contains(rect, point.x, point.y);
};

module.exports = ContainsPoint;
