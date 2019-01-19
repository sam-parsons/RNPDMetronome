//
//  PDPatch.h
//  RNPDMetronome
//
//  Created by Sam Parsons on 1/17/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "PdDispatcher.h"
#import "React/RCTBridgeModule.h"

NS_ASSUME_NONNULL_BEGIN

@interface PDPatch : NSObject <RCTBridgeModule>

-(instancetype)initWithFile:(NSString *)pdFile;

@end

NS_ASSUME_NONNULL_END
