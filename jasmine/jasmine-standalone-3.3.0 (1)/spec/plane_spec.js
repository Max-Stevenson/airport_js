describe('Plane', function() {
	var plane;
	var airport;
	beforeEach(function(){

		plane = new Plane();
		airport = new Airport();
		});
	it('Can land at an airport', function() {
		plane.land(airport);
		expect(airport.landedPlanes).toContain(plane)
	});
});