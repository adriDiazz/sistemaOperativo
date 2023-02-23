import { useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import { closeApp, openApp } from '../redux/appsSlice';
import style from './Mycomputer.module.css';

const Mycomputer = ({ open, title }) => {
	const apps = useSelector(state => state.appsOpened);
	const disaptach = useDispatch();
	const fileSystem = useSelector(state => state.fileSystem);
	const [currentFolder, setCurrentFolder] = useState(fileSystem.root.children);
	const [currentPath, setCurrentPath] = useState('root/');

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
					<div className={style.path}>
						<button
							onClick={() => {
								setCurrentFolder(fileSystem.root.children);
								setCurrentPath('root/');
							}}
						>
							Go patras
						</button>
						<p>{currentPath}</p>
					</div>
					<div className={style.content}>
						{currentFolder.map((file, index) => {
							if (file.type === 'folder') {
								return (
									<div
										key={index}
										onClick={() => {
											setCurrentFolder(file.children);
											setCurrentPath(currentPath + file.name + '/');
										}}
										className={style.folder}
									>
										<img src='folder.png' alt='' />
										{file.name}
									</div>
								);
							}

							if (file.type === 'file') {
								return (
									<div
										key={index}
										className={style.folder}
										onClick={() => {
											disaptach(
												openApp({
													app: 'Notepad',
													content: file.content
												})
											);
										}}
									>
										<img src='file.png' alt='' />
										{file.name}
									</div>
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
