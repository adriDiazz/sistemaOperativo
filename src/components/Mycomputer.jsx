import { useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { closeApp } from '../redux/appsSlice';
import style from './Mycomputer.module.css';

const Mycomputer = ({ open, title }) => {
	const apps = useSelector(state => state.appsOpened);
	const disaptach = useDispatch();
	const fileSystem = useSelector(state => state.fileSystem);
	const [currentFolder, setCurrentFolder] = useState(fileSystem.root.children);
	const [lastPath, setLastPath] = useState();

	console.log(currentFolder);

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

					<div className={style.content}>
						<button onClick={() => setCurrentFolder(fileSystem.root.children)}>
							Go patras
						</button>
						{currentFolder.map((file, index) => {
							if (file.type === 'folder') {
								return (
									<button
										key={index}
										onClick={() => {
											setCurrentFolder(file.children);
										}}
									>
										<img src='folder.png' alt='' />
										{file.name}
									</button>
								);
							}

							if (file.type === 'file') {
								return (
									<button key={index}>
										<img src='file.png' alt='' />
										{file.name}
									</button>
								);
							}
						})}
					</div>
				</div>
			</Draggable>
		)
	);
};

export default Mycomputer;
