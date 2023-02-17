import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { closeApp } from '../redux/appsSlice';
import style from './Mycomputer.module.css';

const Mycomputer = ({ open, title }) => {
	const apps = useSelector(state => state.appsOpened);
	const disaptach = useDispatch();

	const close = () => {
		disaptach(
			closeApp({
				app: 'mycomputer'
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
					<div className={`${style.borderTop}`}>
						<img src='close.png' alt='' onClick={close} />
						<span className={style.title}>{title}</span>
					</div>
				</div>
			</Draggable>
		)
	);
};

export default Mycomputer;
