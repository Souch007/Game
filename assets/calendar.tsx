import React from 'react';
import Svg, { Rect, Line, Path } from 'react-native-svg';

type Props = {
  size?: number;
  color?: string;
};

const CalendarIcon: React.FC<Props> = ({ size = 24, color = '#000' }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Calendar border */}
    <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" />

    {/* Calendar header line */}
    <Line x1="3" y1="10" x2="21" y2="10" />

    {/* Calendar rings */}
    <Line x1="8" y1="2" x2="8" y2="6" />
    <Line x1="16" y1="2" x2="16" y2="6" />

    {/* Optional: Dots or mini boxes for dates */}
    <Path d="M7 14h.01M12 14h.01M17 14h.01M7 18h.01M12 18h.01M17 18h.01" />
  </Svg>
);

export default CalendarIcon;