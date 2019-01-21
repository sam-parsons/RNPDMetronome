//
//  PDPatch.m
//  RNPDMetronome
//
//  Created by Sam Parsons on 1/17/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "PDPatch.h"

@implementation PDPatch

-(instancetype)initWithFile:(NSString *)pdFile{
  void *patch;
  self = [super init];
  if(self){
    patch = [PdBase openFile:pdFile path:[[NSBundle mainBundle]resourcePath]];
    if(!patch){
      NSLog(@"pd patch did not load");
    }
  }
  return self;
}

-(void)onOff:(BOOL)yesNo{
  float yn = (float)yesNo;
  [PdBase sendFloat:yn toReceiver:@"onOff"];
}

-(void)tempoChange:(float)tempo{
  [PdBase sendFloat:tempo toReceiver:@"tempoChange"];
}

@end
