import {BoardsController} from '../blocks/board/boardsController.js';
import {ProjectsController} from './projectsController.js';
import {UserController} from './userController.js';
import {ReportsController} from './reportsController.js';

export var desktopControllers = {

  BoardsController: {
      getController(){
        return new BoardsController();
      }
  },

  ProjectsController: {
    getController(){
      return new ProjectsController();
    }
  },

  ReportsController: {
    getController(){
      return new ReportsController();
    }
  },

  UserController: {
    getController(){
      return new UserController();
    }
  }


}
