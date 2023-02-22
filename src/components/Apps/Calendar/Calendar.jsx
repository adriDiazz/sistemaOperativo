import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';

const localizer = momentLocalizer(moment);

const Calendario = props => {
	const [eventsData, setEventsData] = useState([]);

	const handleSelect = ({ start, end }) => {
		console.log(start);
		console.log(end);
		const title = window.prompt('New Event name');
		if (title)
			setEventsData([
				...eventsData,
				{
					start,
					end,
					title
				}
			]);
	};

	return (
		<Calendar
			localizer={localizer}
			startAccessor='start'
			endAccessor='end'
			selectable
			defaultDate={new Date()}
			defaultView='month'
			events={eventsData}
			style={{
				height: '100%',
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				paddingTop: '4rem'
			}}
			onSelectEvent={event => alert(event.title)}
			onSelectSlot={handleSelect}
		/>
	);
};

export default Calendario;
