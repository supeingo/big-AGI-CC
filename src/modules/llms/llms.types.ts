export namespace LLMS {

  // WARNING: These definitions are also stored/retrieved

  // Content

  export type LContentPart =
    | { type: 'text'; text: string }
    | { type: 'image'; source: ImageSource }
    | { type: 'audio'; source: MediaSource }
    | { type: 'video'; source: MediaSource }
    | { type: 'document'; source: MediaSource }
    | { type: 'function_call'; function: string; args: Record<string, any> }
    | { type: 'function_response'; function: string; response: Record<string, any> };

  type ImageSource =
    | { type: 'base64'; mimeType: string; base64Data: string }
    | { type: 'url'; mimeType: string; url: string }
    | { type: 'fileUri'; mimeType: string; uri: string };

  type MediaSource = // [Gemini Only] Supports audio, video, and documents
    | { type: 'fileUri'; media: 'audio' | 'video' | 'document'; uri: string }
    | { type: 'base64'; mimeType: string; base64Data: string }
    | { type: 'url'; mimeType: string; url: string };


  // Message

  export interface LMessage {
    id: LMessageUid; // useful for tracking and storage
    role: LMessageRole;
    content: LContentPart[];
  }

  type LMessageUid = string;

  export type LMessageRole = 'user' | 'assistant' | 'system';


  // LChatGenerate

  export interface LChatGenerateIn {
    operation: 'generateMessage'; // others? e.g. 'continue'
    history: LMessage[];
    functions?: LChatFunctionDefinition[];
    forceFunctionName?: LChatFunctionDefinition['name'];
    // Note that the Model configuration (max tokens, temperature, etc.) is on a different, specialized plane
    // responseFormat: 'json';
  }

  export interface LChatFunctionDefinition {
    name: string;
    description?: string;
    parameters?: Record<string, any>;
  }


  export interface LChatGenerateMessageOut {
    message: LMessage;
    finish_reason: LGenerateStopReason;
    // usage?: {
    //   promptTokens: number;
    //   completionTokens: number;
    //   totalTokens: number;
    // };
    // cost?: {
    //   promptCost: number;
    //   completionCost: number;
    //   totalCost: number;
    // };
  }

  type LGenerateStopReason =
    | 'done' // stop sequence reached - task done
    | 'function_call' // decided to invoke a function - expecting a follow-up
    | 'length' // ran over the max tokens
    ;


}
