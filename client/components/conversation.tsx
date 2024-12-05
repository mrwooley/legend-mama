import * as React from "react";
import {cn} from "@/lib/utils/utils";

interface SpeakerFieldProps extends React.ComponentProps<'div'> {
  className?: string;
}

class SpeakerField extends React.Component<SpeakerFieldProps> {
  render() {
    let {className, ...props} = this.props;
    return (
      <div
        className={cn(
          "text-left",
          className
        )}
        {...props}
      />
    );
  }
}

interface DialogueFieldProps extends React.ComponentProps<'div'> {
  className?: string;
}

class DialogueField extends React.Component<DialogueFieldProps> {
  render() {
    let {className, ...props} = this.props;
    return (
      <div
        className={cn(
          "text-left mt-1 ml-5 max-md:ml-3",
          className
        )}
        {...props}
      />
    );
  }
}

interface ConversationProps extends React.ComponentProps<'div'> {
  className?: string;
}

class Conversation extends React.Component<ConversationProps> {
  render() {
    let {className, ...props} = this.props;
    return (
      <div
        className={cn(
          "text-left max-md:text-sm",
          className
        )}
        {...props}
      />
    );
  }
}

export {Conversation, SpeakerField, DialogueField}


