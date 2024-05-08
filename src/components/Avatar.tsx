import { AvatarProps, Avatar as MuiAvatar } from '@mui/material';
import React, { useCallback } from 'react';

export interface AvatarComponentProps extends AvatarProps {
  /**
   * Render initial user when `src` value is falsy
   */
  fullName: string;
}

/**
 * Primary UI component for user Profile
 */
export const Avatar: React.FC<AvatarComponentProps> = ({
  src,
  fullName,
  ...props
}) => {
  const stringToColor = useCallback((string: string): string => {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i++) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }, []);

  const getInitial = useCallback((fullname: string): string => {
    let initials: string = fullname
      .split(' ')
      .map((word) => word[0])
      .join('');

    initials = initials
      .substring(0, Math.min(2, initials.length))
      .toUpperCase();

    return initials;
  }, []);

  const getAvatarProps = useCallback(
    (name: string): AvatarProps => {
      if (src) {
        return { src, alt: name, ...props };
      }

      return {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: getInitial(name),
        ...props,
      };
    },
    [getInitial, props, src, stringToColor],
  );

  return <MuiAvatar {...getAvatarProps(fullName)} />;
};

export default React.memo(Avatar);
