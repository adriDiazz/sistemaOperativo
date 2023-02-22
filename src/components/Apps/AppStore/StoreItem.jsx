import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addApp } from '../../../redux/appsSlice';
import { downloadApp } from '../../../redux/downloadedSlice';
import style from './StoreItem.module.css';

const StoreItem = ({ img, title, desc }) => {
	const downloadedApps = useSelector(state => state.downloadedApps);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);

	const getApp = title => {
		loading === false && setLoading(true);

		setTimeout(() => {
			dispatch(
				downloadApp({
					app: title
				})
			);
			dispatch(
				addApp({
					app: title
				})
			);
			setLoading(false);
		}, 1000);
	};

	return (
		<div className={style.appItem}>
			<img src={img} alt='' />
			<div className={style.appInfo}>
				<h3>{title}</h3>
				<p>{desc}</p>
				{loading === true ? (
					<button className={style.button} disabled>
						Loading...
					</button>
				) : (
					<button
						className={style.button}
						onClick={() => getApp(title)}
						disabled={
							downloadedApps.find(apps => apps.name === title).downloaded ===
							true
						}
					>
						{downloadedApps.find(apps => apps.name === title).downloaded ===
						true
							? 'Installed'
							: 'Install'}
					</button>
				)}
			</div>
		</div>
	);
};

export default StoreItem;
