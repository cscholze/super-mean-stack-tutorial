import angular from 'angular';
import _ from 'lodash';

const todoFactory = angular.module('app.todoFactory', [])

.factory('todoFactory', () => {
  function createTask($scope, params) {
    params.createHasInput = false;
    $scope.createTaskInput = '';
  }

  function updateTask(todo) {
    todo.task = todo.updatedTask;
    todo.isEditing = false;
  }

  function deleteTask($scope, todoToDelete) {
    _.remove($scope.todos, todo => todo.
      task === todoToDelete.task );
  }

  function watchCreateTaskInput(params, $scope, val) {
    const createHasInput = params.createHasInput;

    if (!val && createHasInput) {
      $scope.todos.pop();
      params.createHasInput = false;
    }
    else if (val && !createHasInput) {
      $scope.todos.push({ task: val, isCompleted: false });
      params.createHasInput = true;
    }
    else if (val && createHasInput) {
      $scope.todos[$scope.todos.length-1].task = val;
    }
  }

  return {
    createTask,
    updateTask,
    deleteTask,
    watchCreateTaskInput
  };
});

export default todoFactory;
