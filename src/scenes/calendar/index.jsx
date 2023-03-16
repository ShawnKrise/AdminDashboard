import { useState } from "react";
import FullCalendar, { formatDate } from "@FullCalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
  } from "@mui/material";

  const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const [currentEvents, setCurrentEvents] = useState([])

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your next event");
        const calendarAPI = selected.view.calendar;
        calendarAPI.unselect();

        if (title) {
            calendarAPI.addEvent({
                id: `${selected.dataStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        };
    };
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  
  export default Calendar;