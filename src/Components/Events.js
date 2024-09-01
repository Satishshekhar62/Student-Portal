import React from 'react'

const Events = () => {
     // Example events data

     const events = [
        { id: 1, title: 'Orientation Day', date: '2024-09-01' },
        { id: 2, title: 'Science Fair', date: '2024-10-10' },
        { id: 3, title: 'Sports Day', date: '2024-11-15' },
     ];
  return (
    <div className="events">
     <h2>Upcoming Events</h2>
     <ul>
        {events.map(event =>(
            <li key={event.id}>
                {event.title} - {event.date}
            </li>

        ))};
     </ul>
      
    </div>
  )
}

export default Events
