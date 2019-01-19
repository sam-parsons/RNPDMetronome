//
//  Metronome.m
//  RNPDMetronome
//
//  Created by Sam Parsons on 1/18/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "Metronome.h"

@implementation Metronome

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
 return @{@"metronome": @"metronome module message"};
}

@end
