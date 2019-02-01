import { TestBed } from '@angular/core/testing';
import { UsernameService } from './username.service';
describe('UsernameService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(UsernameService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=username.service.spec.js.map