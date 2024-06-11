import { ObjectId } from 'mongodb';
import { CreateEventDto } from './dtos/CreateEvent.dot';
import EventModel, { IEvent } from './models/event';

class EventService {
   

  async getEventById(id: string): Promise<IEvent | null> {
    return await EventModel.findById(id).exec();
  }

  async getEvents(): Promise<IEvent[]> {
    return await EventModel.find().exec();
  }

  async createEvent(eventDto: CreateEventDto): Promise<IEvent> {
    const newEvent = new EventModel(eventDto);
    return await newEvent.save();
  }

  async getEventsByCity(city: string): Promise<IEvent[]> {
    return await EventModel.find({ location: city }).exec();
}
}

export default EventService;
