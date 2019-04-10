import React from "react";
import dateFns from "date-fns";
import "./Calendar.css";
import DayCell from "./DayCell";
import { withRouter } from "react-router-dom";

class Calendar extends React.Component {
	constructor(props) {
		super(props);
		const initialDayFromURL = new Date();
		this.state = {
			date: new Date(
				this.props.match.params.monthDayYear.split("-")[2],
				this.props.match.params.monthDayYear.split("-")[0] - 1,
				this.props.match.params.monthDayYear.split("-")[1] - 1
			),
			currentMonth: initialDayFromURL,
			selectedDate: initialDayFromURL
		};
	}

	renderHeader() {
		const dateFormat = "MMMM YYYY";
		return (
			<div className="header row flex-middle">
				<div className="col col-start">
					<div className="icon" onClick={this.prevMonth}>
						chevron_left
					</div>
				</div>
				<div className="col col-center">
					<span>
						{dateFns.format(
							new Date(
								this.props.match.params.monthDayYear.split("-")[2],
								this.props.match.params.monthDayYear.split("-")[0] - 1,
								this.props.match.params.monthDayYear.split("-")[1]
							),
							dateFormat
						)}
					</span>
				</div>
				<div className="col col-end" onClick={this.nextMonth}>
					<div className="icon">chevron_right</div>
				</div>
			</div>
		);
	}

	renderDays() {
		const dateFormat = "dddd";
		const days = [];

		let startDate = dateFns.startOfWeek(
			new Date(
				this.props.match.params.monthDayYear.split("-")[2],
				this.props.match.params.monthDayYear.split("-")[0] - 1,
				this.props.match.params.monthDayYear.split("-")[1]
			)
		);

		for (let i = 0; i < 7; i++) {
			days.push(
				<div className="col col-center" key={i}>
					{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
				</div>
			);
		}

		return <div className="days row">{days}</div>;
	}

	renderCells() {
		const { selectedDate } = this.state;
		const currentMonth = new Date(
			this.props.match.params.monthDayYear.split("-")[2],
			this.props.match.params.monthDayYear.split("-")[0] - 1,
			this.props.match.params.monthDayYear.split("-")[1]
		);
		const monthStart = dateFns.startOfMonth(currentMonth);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate = dateFns.startOfWeek(monthStart);
		const endDate = dateFns.endOfWeek(monthEnd);

		const dateFormat = "D";
		const rows = [];

		let days = [];
		let day = startDate;
		let formattedDate = "";

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = dateFns.format(day, dateFormat);
				const cloneDay = day;
				// eslint-disable-next-line
				const schedules = this.props.schedules.filter(s =>
					dateFns.isSameDay(day, s.time)
				);
				days.push(
					<DayCell
						key={day}
						day={day}
						schedules={schedules}
						monthStart={monthStart}
						selectedDate={selectedDate}
						cloneDay={cloneDay}
						formattedDate={formattedDate}
						select={this.onDateClick}
					/>
				);
				day = dateFns.addDays(day, 1);
			}
			rows.push(
				<div className="row" key={day}>
					{days}
				</div>
			);
			days = [];
		}
		return <div className="body">{rows}</div>;
	}

	onDateClick = day => {
		this.setState({
			selectedDate: day
		});
	};

	nextMonth = () => {
		const newDate = dateFns.format(
			dateFns.addMonths(
				new Date(
					this.props.match.params.monthDayYear.split("-")[2],
					this.props.match.params.monthDayYear.split("-")[0] - 1,
					this.props.match.params.monthDayYear.split("-")[1]
				),
				1
			),
			"MM-DD-YYYY"
		);
		this.props.history.push(`/schedule/${newDate}`);
	};

	prevMonth = () => {
		const newDate = dateFns.format(
			dateFns.subMonths(
				new Date(
					this.props.match.params.monthDayYear.split("-")[2],
					this.props.match.params.monthDayYear.split("-")[0] - 1,
					this.props.match.params.monthDayYear.split("-")[1]
				),
				1
			),
			"MM-DD-YYYY"
		);
		this.props.history.push(`/schedule/${newDate}`);
	};

	render() {
		return (
			<div className="calendar">
				{this.renderHeader()}
				{this.renderDays()}
				{this.renderCells()}
			</div>
		);
	}
}

export default withRouter(Calendar);
