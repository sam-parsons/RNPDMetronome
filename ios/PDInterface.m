//
//  PDInterface.m
//  RNPDMetronome
//
//  Created by Sam Parsons on 1/20/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(PDInterface, NSObject)
RCT_EXTERN_METHOD(initMetronome)
RCT_EXTERN_METHOD(onSwitchChange)
RCT_EXTERN_METHOD(onTempoChange:(NSInteger *) value)
@end
