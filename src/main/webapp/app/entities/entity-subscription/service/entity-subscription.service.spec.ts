import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { IEntitySubscription } from '../entity-subscription.model';
import { sampleWithFullData, sampleWithNewData, sampleWithPartialData, sampleWithRequiredData } from '../entity-subscription.test-samples';

import { EntitySubscriptionService, RestEntitySubscription } from './entity-subscription.service';

const requireRestSample: RestEntitySubscription = {
  ...sampleWithRequiredData,
  startDate: sampleWithRequiredData.startDate?.toJSON(),
  endDate: sampleWithRequiredData.endDate?.toJSON(),
};

describe('EntitySubscription Service', () => {
  let service: EntitySubscriptionService;
  let httpMock: HttpTestingController;
  let expectedResult: IEntitySubscription | IEntitySubscription[] | boolean | null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    expectedResult = null;
    service = TestBed.inject(EntitySubscriptionService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Service methods', () => {
    it('should find an element', () => {
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.find(123).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should create a EntitySubscription', () => {
      const entitySubscription = { ...sampleWithNewData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.create(entitySubscription).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'POST' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should update a EntitySubscription', () => {
      const entitySubscription = { ...sampleWithRequiredData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.update(entitySubscription).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PUT' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should partial update a EntitySubscription', () => {
      const patchObject = { ...sampleWithPartialData };
      const returnedFromService = { ...requireRestSample };
      const expected = { ...sampleWithRequiredData };

      service.partialUpdate(patchObject).subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'PATCH' });
      req.flush(returnedFromService);
      expect(expectedResult).toMatchObject(expected);
    });

    it('should return a list of EntitySubscription', () => {
      const returnedFromService = { ...requireRestSample };

      const expected = { ...sampleWithRequiredData };

      service.query().subscribe(resp => (expectedResult = resp.body));

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush([returnedFromService]);
      httpMock.verify();
      expect(expectedResult).toMatchObject([expected]);
    });

    it('should delete a EntitySubscription', () => {
      const expected = true;

      service.delete(123).subscribe(resp => (expectedResult = resp.ok));

      const req = httpMock.expectOne({ method: 'DELETE' });
      req.flush({ status: 200 });
      expect(expectedResult).toBe(expected);
    });

    describe('addEntitySubscriptionToCollectionIfMissing', () => {
      it('should add a EntitySubscription to an empty array', () => {
        const entitySubscription: IEntitySubscription = sampleWithRequiredData;
        expectedResult = service.addEntitySubscriptionToCollectionIfMissing([], entitySubscription);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(entitySubscription);
      });

      it('should not add a EntitySubscription to an array that contains it', () => {
        const entitySubscription: IEntitySubscription = sampleWithRequiredData;
        const entitySubscriptionCollection: IEntitySubscription[] = [
          {
            ...entitySubscription,
          },
          sampleWithPartialData,
        ];
        expectedResult = service.addEntitySubscriptionToCollectionIfMissing(entitySubscriptionCollection, entitySubscription);
        expect(expectedResult).toHaveLength(2);
      });

      it("should add a EntitySubscription to an array that doesn't contain it", () => {
        const entitySubscription: IEntitySubscription = sampleWithRequiredData;
        const entitySubscriptionCollection: IEntitySubscription[] = [sampleWithPartialData];
        expectedResult = service.addEntitySubscriptionToCollectionIfMissing(entitySubscriptionCollection, entitySubscription);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(entitySubscription);
      });

      it('should add only unique EntitySubscription to an array', () => {
        const entitySubscriptionArray: IEntitySubscription[] = [sampleWithRequiredData, sampleWithPartialData, sampleWithFullData];
        const entitySubscriptionCollection: IEntitySubscription[] = [sampleWithRequiredData];
        expectedResult = service.addEntitySubscriptionToCollectionIfMissing(entitySubscriptionCollection, ...entitySubscriptionArray);
        expect(expectedResult).toHaveLength(3);
      });

      it('should accept varargs', () => {
        const entitySubscription: IEntitySubscription = sampleWithRequiredData;
        const entitySubscription2: IEntitySubscription = sampleWithPartialData;
        expectedResult = service.addEntitySubscriptionToCollectionIfMissing([], entitySubscription, entitySubscription2);
        expect(expectedResult).toHaveLength(2);
        expect(expectedResult).toContain(entitySubscription);
        expect(expectedResult).toContain(entitySubscription2);
      });

      it('should accept null and undefined values', () => {
        const entitySubscription: IEntitySubscription = sampleWithRequiredData;
        expectedResult = service.addEntitySubscriptionToCollectionIfMissing([], null, entitySubscription, undefined);
        expect(expectedResult).toHaveLength(1);
        expect(expectedResult).toContain(entitySubscription);
      });

      it('should return initial array if no EntitySubscription is added', () => {
        const entitySubscriptionCollection: IEntitySubscription[] = [sampleWithRequiredData];
        expectedResult = service.addEntitySubscriptionToCollectionIfMissing(entitySubscriptionCollection, undefined, null);
        expect(expectedResult).toEqual(entitySubscriptionCollection);
      });
    });

    describe('compareEntitySubscription', () => {
      it('Should return true if both entities are null', () => {
        const entity1 = null;
        const entity2 = null;

        const compareResult = service.compareEntitySubscription(entity1, entity2);

        expect(compareResult).toEqual(true);
      });

      it('Should return false if one entity is null', () => {
        const entity1 = { id: 123 };
        const entity2 = null;

        const compareResult1 = service.compareEntitySubscription(entity1, entity2);
        const compareResult2 = service.compareEntitySubscription(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey differs', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 456 };

        const compareResult1 = service.compareEntitySubscription(entity1, entity2);
        const compareResult2 = service.compareEntitySubscription(entity2, entity1);

        expect(compareResult1).toEqual(false);
        expect(compareResult2).toEqual(false);
      });

      it('Should return false if primaryKey matches', () => {
        const entity1 = { id: 123 };
        const entity2 = { id: 123 };

        const compareResult1 = service.compareEntitySubscription(entity1, entity2);
        const compareResult2 = service.compareEntitySubscription(entity2, entity1);

        expect(compareResult1).toEqual(true);
        expect(compareResult2).toEqual(true);
      });
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
