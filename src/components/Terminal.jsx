import { useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { closeApp } from '../redux/appsSlice';
import style from './Terminal.module.css';

const Terminal = ({ open, title }) => {
	const apps = useSelector(state => state.appsOpened);
	const disaptach = useDispatch();
	const [value, setValue] = useState('> ');

	const close = () => {
		disaptach(
			closeApp({
				app: 'terminal'
			})
		);
	};
	return (
		open && (
			<Draggable
				defaultPosition={{
					x: 150,
					y: 100
				}}
			>
				<div className={style.window}>
					<div className={style.borderTop}>
						<img src='close.png' alt='' onClick={close} />
						<span className={style.title}>{title}</span>
					</div>

					<div className={style.terminal}></div>
					<input
						type='text'
						className={style.input}
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
				</div>
			</Draggable>
		)
	);
};

export default Terminal;
