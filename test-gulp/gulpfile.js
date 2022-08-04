const gulp = require("gulp");


gulp.task("test", function (done) {
	console.log(`To jest testowanie`);
	done();
});

function test2(done) {
	console.log("To jest drugi test");
	done();
}

exports.test2 = test2;

function showGulp(done) {
	const user = {
    name: 'Jan'
    }

    console.log(user.name)
	done();
}

exports.showGulp = showGulp


function test3 (done) {
console.log(123456)
done()
}

function test4 (done) {
console.log(`123456`)
done()
}

exports.seriestest = gulp.series (test3, test4)
exports.paralleltest = gulp.parallel (test3, test4)

exports.default = showGulp



