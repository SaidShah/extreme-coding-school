import React, { PureComponent } from 'react';

class SideBar extends PureComponent {

	render() {
		return (
			<div className="column-left-side center-text">
				<h3 className="blue-text bold-text font-size-2">Enrolling Now</h3>
				<hr/>
				<h6 className="blue-text bold-text font-size-1-3">Full-Stack Development</h6>
				<hr/>
				<p className="font-size-1-2">5/01 : Stony Brook </p>
				<p className="font-size-1-2"> 5/22 : Stony Brook </p>

				<hr/>
				<h6 className="blue-text bold-text font-size-1-3">Our Mission</h6>
				<hr/>
				<p className="font-size-1-2 center-text">The mission at Extreme Coding School is to educate students through practice and not just slides or books. We want to train our students to push disciplinary frontiers, confront complex issues and engineer innovative solutions for the grand challenges of our time.
				</p>

				<hr/>
				<h6 className="blue-text bold-text font-size-1-3">Email</h6>
				<hr/>
				<p className="font-size-1-2"><a className="no-transition" href="mailto:admissions@extremecodingschool.com">Enrollment</a></p>
				<p className="font-size-1-2"><a className="no-transition" href="mailto:admissions@extremecodingschool.com">Student Services</a></p>

				<hr/>
				<h6 className="blue-text bold-text font-size-1-3">Contact Admissions</h6>
				<hr/>
				<p className="font-size-1-2">(###)###-####</p>
				<p className="font-size-1-2">(###)###-####</p>
			</div>
		)
	}
}

export default SideBar;