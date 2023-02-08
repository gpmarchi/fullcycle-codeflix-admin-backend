import { InvalidUUIDError } from '../../../shared/errors/invalid-uuid';
import { UniqueEntityId } from './unique-entity-id';

const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');

describe('UniqueEntityId', () => {
  it('should throw an error when uuid is invalid', () => {
    expect(() => new UniqueEntityId('fake id')).toThrow(InvalidUUIDError);
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should get an unique entity id from new instance', () => {
    const uniqueEntityId = new UniqueEntityId();

    expect(uniqueEntityId.id).toBeTruthy();
    expect(validateSpy).toHaveBeenCalled();
  });

  it('should create new instance with custom uuid', () => {
    const uuid = '6b58dc97-2ef3-4bb6-9b9d-d3c11a526033';

    const uniqueEntityId = new UniqueEntityId(uuid);

    expect(uniqueEntityId.id).toBe(uuid);
    expect(validateSpy).toHaveBeenCalled();
  });
});
