import { City } from 'src/domain/entities/city';
import { CityRepository } from 'src/domain/services/protocols/city-repository';

export class FakeCityRepository extends CityRepository {
  fakeCities: City[] = [
    {
      id: 1,
      name: 'Lavras',
      state: 'MG',
      coord: {
        latitude: 1,
        longitude: 1,
      },
    },
    {
      id: 2,
      name: 'Divinópolis',
      state: 'MG',
      coord: {
        latitude: 1,
        longitude: 1,
      },
    },
    {
      id: 3,
      name: 'Moeda',
      state: 'MG',
      coord: {
        latitude: 1,
        longitude: 1,
      },
    },
  ];

  async getAll(): Promise<City[]> {
    return this.fakeCities;
  }

  async getById(id: number): Promise<City> {
    return this.fakeCities.find((city) => city.id === id);
  }
}