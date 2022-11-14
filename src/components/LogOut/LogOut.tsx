import { FC } from 'react';

type Props = {
  resetUser: () => void;
};

export const LogOut: FC<Props> = ({ resetUser }) => {
  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        localStorage.clear();
        resetUser();
      }}
    >
      Log out
    </button>
  );
};
