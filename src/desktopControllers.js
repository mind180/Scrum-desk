import {BoardsController} from '../blocks/board/boardsController.js';
import {ProjectsController} from './projectsController.js';

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
      return {};
    }
  }

}
