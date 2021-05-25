import React from 'react'
import "..css/Dialog.css"
const Dialog = () => {
    return (
        <React.Fragment>
            <div class="full-dialog-setting">

                <div class="content-header-dialog">
                    <img src="https://110900.backlog.com/SpaceImage.action" alt="avatar" class="img-dialog"></img>
                        <h2 class="h2-dialog">Change Issue</h2>
    
                    <div class="content-header-dialog-issue"><h3 class="h3-dialog">Issue Name</h3></div>
                    <form>
                        <select name="issue-type" class="issue-type-dialog">
                            <option value="task">Task</option>
                            <option value="bug">Bug</option>
                            <option value="Request">Request</option>
                            <option value="Other">Other</option>
                        </select>
                    </form>
                    <div>
                        <input
                            type="text"
                            name="subject"
                            class="subject-dialog"
                            placeholder="Subject"
                        >
                        </input>
                    </div>
                    <div class="issue-content-dialog">
                        <div>
                            <textarea
                                name="textarea"
                                placeholder="Add a description, use @mention to notify a colleague..."
                                id="textarea-dialog"
                            ></textarea>
                        </div>
                        <div class="table-dialog">
                            <table class="table-left-dialog">
                                <tbody>
                                    <tr>
                                        <td id="table-element">Status</td>
                                        <td>
                                            <select class="status-dialog">
                                                <option value="open">Open</option>
                                                <option value="in_progress">In Progress</option>
                                                <option value="resolved">Resolved</option>
                                                <option value="closed">Closed</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="table-element">Priority</td>
                                        <td>
                                            <select class="priority-dialog">
                                                <option value="high">High</option>
                                                <option value="normal">Normal</option>
                                                <option value="low">Low</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="table-element">Category</td>
                                        <td>
                                            <input type="text" name="category" class="category-dialog"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="table-element">Due date</td>
                                        <td>
                                            <input type="datetime-local" id="date-time" name="date-time"></input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table-right-dialog">
                                <tbody>
                                    <tr>
                                        <td id="table-element">Assignee</td>
                                        <td>
                                            <select class="assignee-dialog">
                                                <option value="me">Me</option>
                                                <option value="you">You</option>
                                                <option value="we">We</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="table-element">Milestone</td>
                                        <td>
                                            <input type="text" name="milestone" class="milestone-dialog"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="table-element">Version</td>
                                        <td>
                                            <input type="text" name="version" class="version-dialog"></input>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="button-dialog">
                        <div class="button-dialog__delete">
                            <button class="delete">Delete issue</button>
                        </div>
                        <div class="button-dialog__back__save">
                            <button class="back">Back</button>
                            <button class="save">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
};

export default Dialog
