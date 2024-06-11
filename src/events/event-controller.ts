import { Request, Response } from 'express';
import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventService from './event-service';
import { IEvent } from './models/event';

class EventController {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    createEvent = async (req: Request, res: Response): Promise<void> => {
        try {
            const eventDto: CreateEventDto = req.body;
            const newEvent = await this.eventService.createEvent(eventDto);
            res.status(201).json(newEvent);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getEvents = async (req: Request, res: Response): Promise<void> => {
        try {
            const events = await this.eventService.getEvents();
            res.status(200).json(events);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getEventById = async (req: Request, res: Response): Promise<void> => {
        try {
            const eventId: string = req.params.id;
            const event = await this.eventService.getEventById(eventId);
            if (!event) {
                res.status(404).json({ error: "Event not found" });
            } else {
                res.status(200).json(event);
            }
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }

    getEventsByCity = async (req: Request, res: Response): Promise<void> => {
        try {
            const userCity = (req as any).params.location; 
            const events = await this.eventService.getEventsByCity(userCity);
            res.status(200).json(events);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default EventController;
