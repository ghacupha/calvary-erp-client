///
/// Erp System - Mark I No 2 (Beniah Series) Client 0.0.1-SNAPSHOT
/// Copyright © 2021 - 2025 Edwin Njeru (mailnjeru@gmail.com)
///
/// This program is free software: you can redistribute it and/or modify
/// it under the terms of the GNU General Public License as published by
/// the Free Software Foundation, either version 3 of the License, or
/// (at your option) any later version.
///
/// This program is distributed in the hope that it will be useful,
/// but WITHOUT ANY WARRANTY; without even the implied warranty of
/// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
/// GNU General Public License for more details.
///
/// You should have received a copy of the GNU General Public License
/// along with this program. If not, see <http://www.gnu.org/licenses/>.
///

import { TestBed, inject } from '@angular/core/testing';

import { ParseLinks } from './parse-links.service';

describe('Parse links service test', () => {
  describe('parse', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ParseLinks],
      });
    });

    it('should throw an error when passed an empty string', inject([ParseLinks], (service: ParseLinks) => {
      expect(function () {
        service.parse('');
      }).toThrow(new Error('input must not be of zero length'));
    }));

    it('should throw an error when passed without comma', inject([ParseLinks], (service: ParseLinks) => {
      expect(function () {
        service.parse('test');
      }).toThrow(new Error('section could not be split on ";"'));
    }));

    it('should throw an error when passed without semicolon', inject([ParseLinks], (service: ParseLinks) => {
      expect(function () {
        service.parse('test,test2');
      }).toThrow(new Error('section could not be split on ";"'));
    }));

    it('should return links when headers are passed', inject([ParseLinks], (service: ParseLinks) => {
      const links = { last: 0, first: 0 };
      expect(service.parse(' </api/audits?page=0&size=20>; rel="last",</api/audits?page=0&size=20>; rel="first"')).toEqual(links);
    }));
  });
  describe('parseAll', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [ParseLinks],
      });
    });

    it('should throw an error when passed an empty string', inject([ParseLinks], (service: ParseLinks) => {
      expect(function () {
        service.parseAll('');
      }).toThrow(new Error('input must not be of zero length'));
    }));

    it('should throw an error when passed without comma', inject([ParseLinks], (service: ParseLinks) => {
      expect(function () {
        service.parseAll('test');
      }).toThrow(new Error('section could not be split on ";"'));
    }));

    it('should throw an error when passed without semicolon', inject([ParseLinks], (service: ParseLinks) => {
      expect(function () {
        service.parseAll('test,test2');
      }).toThrow(new Error('section could not be split on ";"'));
    }));

    it('should return links when headers are passed', inject([ParseLinks], (service: ParseLinks) => {
      const links = { last: { page: '0', size: '20' }, first: { page: '0', size: '20' } };
      expect(service.parseAll(' </api/audits?page=0&size=20>; rel="last",</api/audits?page=0&size=20>; rel="first"')).toEqual(links);
    }));
  });
});
