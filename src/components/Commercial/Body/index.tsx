import { Info } from '../Info';
import { QualifiedProvider } from '../QualifiedProvider';

export const Body = () => {
  return (
    <div className="pt-10">
      <QualifiedProvider />
      <Info />
    </div>
  );
};
