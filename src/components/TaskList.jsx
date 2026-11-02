import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm }) => {
  // Fungsi penentu warna badge prioritas (Syarat Kustomisasi Tugas)
  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'High':
        return 'danger';   // Merah
      case 'Medium':
        return 'warning';  // Kuning
      case 'Low':
        return 'success';  // Hijau
      default:
        return 'secondary';
    }
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-muted text-center py-4">Belum ada tugas. Klik "+ Add Task" untuk menambahkan!</p>
      ) : (
        tasks.map((task) => (
          <Card className="mb-3 shadow-sm border-0 rounded-3" key={task.id}>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{task.name}</h5>
                <div className="d-flex align-items-center gap-2 mt-2">
                  <Badge bg={getPriorityBadge(task.priority)} className="px-2 py-1">
                    {task.priority} Priority
                  </Badge>
                  <Badge bg="info" className="text-dark px-2 py-1">
                    {task.status}
                  </Badge>
                </div>
              </div>
              <div>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="me-2"
                  onClick={() => showEditForm(task)}
                >
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default TaskList;