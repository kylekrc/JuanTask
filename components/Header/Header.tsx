import User from '../User';
import classes from './Header.module.css';

export default async function Header() {
  return (
    <div className={classes.header}>
      <h3 className='font-mono text-xl'>JuanTask</h3>
      <User />
    </div>
  );
}
