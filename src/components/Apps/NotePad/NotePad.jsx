import { useState } from 'react';
import style from './NotePad.module.css';

const NotePad = ({ content }) => {
	const [text, setText] = useState(content || 'Start typing...');
	const [textStyle, setTextStyle] = useState('P');

	console.log(content);

	console.log(textStyle === 'P');

	return (
		<div className={`${style.wrapper} cancel`}>
			<div className={style.menu}>
				<ul className={style.options}>
					<li
						onClick={() => setTextStyle('H1')}
						className={textStyle === 'H1' ? style.active : style.noactive}
					>
						H1
					</li>
					<li
						onClick={() => setTextStyle('H2')}
						className={textStyle === 'H2' ? style.active : style.noactive}
					>
						H2
					</li>
					<li
						onClick={() => setTextStyle('H3')}
						className={textStyle === 'H3' ? style.active : style.noactive}
					>
						H3
					</li>
					<li
						onClick={() => setTextStyle('P')}
						className={textStyle === 'P' ? style.active : style.noactive}
					>
						P
					</li>
				</ul>
				<button>Save File</button>
			</div>
			<div className={style.textarea}>
				<textarea
					value={text}
					onChange={e => setText(e.target.value)}
					className={style[textStyle]}
				></textarea>
			</div>
		</div>
	);
};

export default NotePad;
