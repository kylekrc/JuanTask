import User from '../User';
import classes from './Header.module.css';

export default async function Header() {
  return (
    <div className={classes.header}>
      <div className='flex w-[20%] sm:w-[4%]'>
        <img src="JT.png" alt="" />
      </div>
    </div>
  );
}
