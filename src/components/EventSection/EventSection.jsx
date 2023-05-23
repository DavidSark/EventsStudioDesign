import React, { useState } from 'react';

import { HashLink as Link } from 'react-router-hash-link';

import './EventSection.scss';

const EventList = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const events = ['Mariage', 'Anniversaire', 'Gender', 'Religion'];

    const handleEventHover = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className='event-container-parent'>
            <div className="event-container">
                <div className='event-container-img'>
                    <div className="event-image">
                        {selectedEvent && (
                            <img src={`img/${selectedEvent.toLowerCase()}.png`} alt={selectedEvent} />
                        )}
                    </div>
                </div>

                <div className="event-list">

                    <div className="event-title-center">
                        <h2>Choississez votre expérience</h2>
                        <div className="event-title-underline"></div>
                    </div>

                    <div className='container-event-item'>
                        {events.map((event, index) => (
                            <Link
                                key={index}
                                to={`/prestations#${event.toLowerCase()}`}
                                className={`event-item ${selectedEvent === event ? 'active' : ''}`}
                                onMouseEnter={() => handleEventHover(event)}
                                onMouseLeave={() => handleEventHover(null)}>



                                <span>{`0${index + 1}.`}</span>
                                <div className="event-item-mg">{event}</div>
                                <img className='event-arrow' src="./img/svg/golden-arrow.svg" alt="" />


                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EventList;
