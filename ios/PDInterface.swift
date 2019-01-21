//
//  PDInterface.swift
//  RNPDMetronome
//
//  Created by Sam Parsons on 1/20/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit

@objc(PDInterface)
class PDInterface: NSObject {

  var patch:PDPatch?
  var playing:Bool = false
  var tempo:Int = 120
  
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["initialCount": 0]
  }
  
  @objc
  public func onSwitchChange() {
    print("switch button was pressed")
    playing = !playing
    print("value of playing: ", playing)
    patch?.onOff(playing)
  }
  
  @objc
  public func onTempoChange(_ value: Int) {
    print("changing tempo to: ", value)
    var temp = Float(value)
    patch?.tempoChange(temp)
  }
  
  @objc
  public func initMetronome() {
    print("metronome initiated")
    patch = PDPatch(file: "main.pd")
  }
  
}
