import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { closeApp } from '../../../redux/appsSlice';
import CopyPaint from './PaintApp';
import style from './Paint.module.css';

const Paint = ({ open, title }) => {
	const apps = useSelector(state => state.appsOpened);
	const disaptach = useDispatch();

	const close = () => {
		disaptach(
			closeApp({
				app: 'Paint'
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
				cancel='.cancel'
			>
				<div className={`${style.window} cancel`}>
					<div className={`${style.borderTop}`}>
						<img src='close.png' alt='' onClick={close} />
						<span className={style.title}>{title}</span>
					</div>
					<CopyPaint />
				</div>
			</Draggable>
		)
	);
};

export default Paint;
