import React from "react";

import { observer } from "mobx-react";
import { types } from "mobx-state-tree";

import BaseTool from "./Base";
import ToolMixin from "../mixins/Tool";
import BasicToolView from "../components/Tools/Basic";
import { guidGenerator, restoreNewsnapshot } from "../core/Helpers";

const ToolView = observer(({ item }) => {
  return (
    <BasicToolView
      selected={item.selected}
      icon="retweet"
      tooltip="Rotate"
      onClick={ev => {
        item.rotate();
      }}
    />
  );
});

const _Tool = types
  .model({})
  .views(self => ({
    get viewClass() {
      return <ToolView item={self} />;
    },
  }))
  .actions(self => ({
    rotate() {
      self.obj.rotate();
    },
  }));

const Rotate = types.compose(ToolMixin, BaseTool, _Tool);

export { Rotate };

// ImageTools.addTool(RotateTool);
