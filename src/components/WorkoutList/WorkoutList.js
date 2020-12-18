import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class WorkoutList extends Component {

    constructor(props) {
        super(props);

        this.deleteWorkout = this.deleteWorkout.bind(this);

        this.state = { workouts: [] }
    }

    componentDidMount() {

        axios.get('http://localhost:5000/workouts/')
            .then(response => {

                if (response.data.length > 0) {
                    this.setState({ workouts: response.data })
                }
            })
            .catch(err => console.error(err))
    }

    workoutList() {
        return this.state.workouts.map(currentWorkout => {
            return (
                <div>
                    <span>{currentWorkout.username} | </span>
                    <span>{currentWorkout.description} | </span>
                    <span>{currentWorkout.duration} | </span>
                    <span>{currentWorkout.date}</span>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Workouts</h3>
                {this.workoutList()}
            </div>
        )
    }
}