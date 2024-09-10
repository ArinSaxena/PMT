import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = ({ tasks }) => {
  const { taskTitle } = useParams();
  const navigate = useNavigate();

  // Find the current task by title (or however you identify the task)
  const task = tasks.find((t) => t.title === taskTitle);

  // State to hold task form details
  const [formData, setFormData] = useState({
    title: task.title || "",
    description: task.description || "",
    dueDate: task.dueDate || "",
    assignee: task.assignee || "",
    comments: task.comments || [],
  });

  const [newComment, setNewComment] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Update the task with formData
    // Call an API or update the state to reflect the changes
    console.log("Task updated:", formData);
    navigate(-1); // Navigate back to the previous page
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setFormData({
        ...formData,
        comments: [...formData.comments, newComment],
      });
      setNewComment(""); // Clear comment input
    }
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back without saving changes
  };

  return (
    <div className="task-details-form">
      <h2>Task Details</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
        <label>Assignee</label>
        <input
          type="text"
          name="assignee"
          value={formData.assignee}
          onChange={handleChange}
          required
        />
        <div className="form-buttons">
          <button type="submit" className="update-btn">
            Update
          </button>
          <button type="button" onClick={handleCancel} className="cancel-btn">
            Cancel
          </button>
        </div>
      </form>

      <div className="comments-section">
        <h3>Comments</h3>
        {formData.comments.length > 0 ? (
          <ul>
            {formData.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        ) : (
          <p>No comments yet</p>
        )}
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
          <div className="form-buttons">
            <button type="submit" className="add-comment-btn">
              Add Comment
            </button>
            <button type="button" onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
