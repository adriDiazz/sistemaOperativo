import style from './TopBar.module.css';

const TopBar = () => {
	const date = new Date();
	return (
		<div className={style.topBar}>
			<ul className={style.ul}>
				<li>File</li>
				<li>Settings</li>
				<li>Help</li>
				<li>Logout</li>
			</ul>
			<span
				className={style.date}
			>{`${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`}</span>
		</div>
	);
};

export default TopBar;
