// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddLiquidity extends ethereum.Event {
  get params(): AddLiquidity__Params {
    return new AddLiquidity__Params(this);
  }
}

export class AddLiquidity__Params {
  _event: AddLiquidity;

  constructor(event: AddLiquidity) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAmounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get fees(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get invariant(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get lpTokenSupply(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NewAdminFee extends ethereum.Event {
  get params(): NewAdminFee__Params {
    return new NewAdminFee__Params(this);
  }
}

export class NewAdminFee__Params {
  _event: NewAdminFee;

  constructor(event: NewAdminFee) {
    this._event = event;
  }

  get newAdminFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NewSwapFee extends ethereum.Event {
  get params(): NewSwapFee__Params {
    return new NewSwapFee__Params(this);
  }
}

export class NewSwapFee__Params {
  _event: NewSwapFee;

  constructor(event: NewSwapFee) {
    this._event = event;
  }

  get newSwapFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NewWithdrawFee extends ethereum.Event {
  get params(): NewWithdrawFee__Params {
    return new NewWithdrawFee__Params(this);
  }
}

export class NewWithdrawFee__Params {
  _event: NewWithdrawFee;

  constructor(event: NewWithdrawFee) {
    this._event = event;
  }

  get newWithdrawFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RampA extends ethereum.Event {
  get params(): RampA__Params {
    return new RampA__Params(this);
  }
}

export class RampA__Params {
  _event: RampA;

  constructor(event: RampA) {
    this._event = event;
  }

  get oldA(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newA(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get initialTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get futureTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RemoveLiquidity extends ethereum.Event {
  get params(): RemoveLiquidity__Params {
    return new RemoveLiquidity__Params(this);
  }
}

export class RemoveLiquidity__Params {
  _event: RemoveLiquidity;

  constructor(event: RemoveLiquidity) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAmounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get lpTokenSupply(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RemoveLiquidityImbalance extends ethereum.Event {
  get params(): RemoveLiquidityImbalance__Params {
    return new RemoveLiquidityImbalance__Params(this);
  }
}

export class RemoveLiquidityImbalance__Params {
  _event: RemoveLiquidityImbalance;

  constructor(event: RemoveLiquidityImbalance) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenAmounts(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get fees(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get invariant(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get lpTokenSupply(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class RemoveLiquidityOne extends ethereum.Event {
  get params(): RemoveLiquidityOne__Params {
    return new RemoveLiquidityOne__Params(this);
  }
}

export class RemoveLiquidityOne__Params {
  _event: RemoveLiquidityOne;

  constructor(event: RemoveLiquidityOne) {
    this._event = event;
  }

  get provider(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get lpTokenAmount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get lpTokenSupply(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get boughtId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get tokensBought(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class StopRampA extends ethereum.Event {
  get params(): StopRampA__Params {
    return new StopRampA__Params(this);
  }
}

export class StopRampA__Params {
  _event: StopRampA;

  constructor(event: StopRampA) {
    this._event = event;
  }

  get currentA(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get time(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TokenSwap extends ethereum.Event {
  get params(): TokenSwap__Params {
    return new TokenSwap__Params(this);
  }
}

export class TokenSwap__Params {
  _event: TokenSwap;

  constructor(event: TokenSwap) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokensSold(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokensBought(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get soldId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get boughtId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class L2_Amm__swapStorageResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    return map;
  }
}

export class L2_Amm extends ethereum.SmartContract {
  static bind(address: Address): L2_Amm {
    return new L2_Amm("L2_Amm", address);
  }

  addLiquidity(
    amounts: Array<BigInt>,
    minToMint: BigInt,
    deadline: BigInt
  ): BigInt {
    let result = super.call(
      "addLiquidity",
      "addLiquidity(uint256[],uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromUnsignedBigInt(minToMint),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigInt();
  }

  try_addLiquidity(
    amounts: Array<BigInt>,
    minToMint: BigInt,
    deadline: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "addLiquidity",
      "addLiquidity(uint256[],uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromUnsignedBigInt(minToMint),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateCurrentWithdrawFee(user: Address): BigInt {
    let result = super.call(
      "calculateCurrentWithdrawFee",
      "calculateCurrentWithdrawFee(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_calculateCurrentWithdrawFee(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateCurrentWithdrawFee",
      "calculateCurrentWithdrawFee(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateRemoveLiquidity(account: Address, amount: BigInt): Array<BigInt> {
    let result = super.call(
      "calculateRemoveLiquidity",
      "calculateRemoveLiquidity(address,uint256):(uint256[])",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_calculateRemoveLiquidity(
    account: Address,
    amount: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "calculateRemoveLiquidity",
      "calculateRemoveLiquidity(address,uint256):(uint256[])",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  calculateRemoveLiquidityOneToken(
    account: Address,
    tokenAmount: BigInt,
    tokenIndex: i32
  ): BigInt {
    let result = super.call(
      "calculateRemoveLiquidityOneToken",
      "calculateRemoveLiquidityOneToken(address,uint256,uint8):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndex))
      ]
    );

    return result[0].toBigInt();
  }

  try_calculateRemoveLiquidityOneToken(
    account: Address,
    tokenAmount: BigInt,
    tokenIndex: i32
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateRemoveLiquidityOneToken",
      "calculateRemoveLiquidityOneToken(address,uint256,uint8):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndex))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateSwap(tokenIndexFrom: i32, tokenIndexTo: i32, dx: BigInt): BigInt {
    let result = super.call(
      "calculateSwap",
      "calculateSwap(uint8,uint8,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexFrom)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexTo)),
        ethereum.Value.fromUnsignedBigInt(dx)
      ]
    );

    return result[0].toBigInt();
  }

  try_calculateSwap(
    tokenIndexFrom: i32,
    tokenIndexTo: i32,
    dx: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateSwap",
      "calculateSwap(uint8,uint8,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexFrom)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexTo)),
        ethereum.Value.fromUnsignedBigInt(dx)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  calculateTokenAmount(
    account: Address,
    amounts: Array<BigInt>,
    deposit: boolean
  ): BigInt {
    let result = super.call(
      "calculateTokenAmount",
      "calculateTokenAmount(address,uint256[],bool):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromBoolean(deposit)
      ]
    );

    return result[0].toBigInt();
  }

  try_calculateTokenAmount(
    account: Address,
    amounts: Array<BigInt>,
    deposit: boolean
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "calculateTokenAmount",
      "calculateTokenAmount(address,uint256[],bool):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromBoolean(deposit)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getA(): BigInt {
    let result = super.call("getA", "getA():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getA(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getA", "getA():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAPrecise(): BigInt {
    let result = super.call("getAPrecise", "getAPrecise():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getAPrecise(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getAPrecise", "getAPrecise():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAdminBalance(index: BigInt): BigInt {
    let result = super.call(
      "getAdminBalance",
      "getAdminBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );

    return result[0].toBigInt();
  }

  try_getAdminBalance(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAdminBalance",
      "getAdminBalance(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getDepositTimestamp(user: Address): BigInt {
    let result = super.call(
      "getDepositTimestamp",
      "getDepositTimestamp(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );

    return result[0].toBigInt();
  }

  try_getDepositTimestamp(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getDepositTimestamp",
      "getDepositTimestamp(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getToken(index: i32): Address {
    let result = super.call("getToken", "getToken(uint8):(address)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(index))
    ]);

    return result[0].toAddress();
  }

  try_getToken(index: i32): ethereum.CallResult<Address> {
    let result = super.tryCall("getToken", "getToken(uint8):(address)", [
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(index))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTokenBalance(index: i32): BigInt {
    let result = super.call(
      "getTokenBalance",
      "getTokenBalance(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(index))]
    );

    return result[0].toBigInt();
  }

  try_getTokenBalance(index: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTokenBalance",
      "getTokenBalance(uint8):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(index))]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTokenIndex(tokenAddress: Address): i32 {
    let result = super.call("getTokenIndex", "getTokenIndex(address):(uint8)", [
      ethereum.Value.fromAddress(tokenAddress)
    ]);

    return result[0].toI32();
  }

  try_getTokenIndex(tokenAddress: Address): ethereum.CallResult<i32> {
    let result = super.tryCall(
      "getTokenIndex",
      "getTokenIndex(address):(uint8)",
      [ethereum.Value.fromAddress(tokenAddress)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  getVirtualPrice(): BigInt {
    let result = super.call(
      "getVirtualPrice",
      "getVirtualPrice():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getVirtualPrice(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVirtualPrice",
      "getVirtualPrice():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeLiquidity(
    amount: BigInt,
    minAmounts: Array<BigInt>,
    deadline: BigInt
  ): Array<BigInt> {
    let result = super.call(
      "removeLiquidity",
      "removeLiquidity(uint256,uint256[],uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigIntArray(minAmounts),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_removeLiquidity(
    amount: BigInt,
    minAmounts: Array<BigInt>,
    deadline: BigInt
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "removeLiquidity",
      "removeLiquidity(uint256,uint256[],uint256):(uint256[])",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigIntArray(minAmounts),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  removeLiquidityImbalance(
    amounts: Array<BigInt>,
    maxBurnAmount: BigInt,
    deadline: BigInt
  ): BigInt {
    let result = super.call(
      "removeLiquidityImbalance",
      "removeLiquidityImbalance(uint256[],uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromUnsignedBigInt(maxBurnAmount),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigInt();
  }

  try_removeLiquidityImbalance(
    amounts: Array<BigInt>,
    maxBurnAmount: BigInt,
    deadline: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "removeLiquidityImbalance",
      "removeLiquidityImbalance(uint256[],uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigIntArray(amounts),
        ethereum.Value.fromUnsignedBigInt(maxBurnAmount),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  removeLiquidityOneToken(
    tokenAmount: BigInt,
    tokenIndex: i32,
    minAmount: BigInt,
    deadline: BigInt
  ): BigInt {
    let result = super.call(
      "removeLiquidityOneToken",
      "removeLiquidityOneToken(uint256,uint8,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndex)),
        ethereum.Value.fromUnsignedBigInt(minAmount),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigInt();
  }

  try_removeLiquidityOneToken(
    tokenAmount: BigInt,
    tokenIndex: i32,
    minAmount: BigInt,
    deadline: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "removeLiquidityOneToken",
      "removeLiquidityOneToken(uint256,uint8,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenAmount),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndex)),
        ethereum.Value.fromUnsignedBigInt(minAmount),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swap(
    tokenIndexFrom: i32,
    tokenIndexTo: i32,
    dx: BigInt,
    minDy: BigInt,
    deadline: BigInt
  ): BigInt {
    let result = super.call(
      "swap",
      "swap(uint8,uint8,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexFrom)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexTo)),
        ethereum.Value.fromUnsignedBigInt(dx),
        ethereum.Value.fromUnsignedBigInt(minDy),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );

    return result[0].toBigInt();
  }

  try_swap(
    tokenIndexFrom: i32,
    tokenIndexTo: i32,
    dx: BigInt,
    minDy: BigInt,
    deadline: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "swap",
      "swap(uint8,uint8,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexFrom)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenIndexTo)),
        ethereum.Value.fromUnsignedBigInt(dx),
        ethereum.Value.fromUnsignedBigInt(minDy),
        ethereum.Value.fromUnsignedBigInt(deadline)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  swapStorage(): L2_Amm__swapStorageResult {
    let result = super.call(
      "swapStorage",
      "swapStorage():(uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)",
      []
    );

    return new L2_Amm__swapStorageResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress()
    );
  }

  try_swapStorage(): ethereum.CallResult<L2_Amm__swapStorageResult> {
    let result = super.tryCall(
      "swapStorage",
      "swapStorage():(uint256,uint256,uint256,uint256,uint256,uint256,uint256,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new L2_Amm__swapStorageResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress()
      )
    );
  }
}

export class AddLiquidityCall extends ethereum.Call {
  get inputs(): AddLiquidityCall__Inputs {
    return new AddLiquidityCall__Inputs(this);
  }

  get outputs(): AddLiquidityCall__Outputs {
    return new AddLiquidityCall__Outputs(this);
  }
}

export class AddLiquidityCall__Inputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get minToMint(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddLiquidityCall__Outputs {
  _call: AddLiquidityCall;

  constructor(call: AddLiquidityCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _pooledTokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get decimals(): Array<i32> {
    return this._call.inputValues[1].value.toI32Array();
  }

  get lpTokenName(): string {
    return this._call.inputValues[2].value.toString();
  }

  get lpTokenSymbol(): string {
    return this._call.inputValues[3].value.toString();
  }

  get _a(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _fee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _adminFee(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _withdrawFee(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RemoveLiquidityCall extends ethereum.Call {
  get inputs(): RemoveLiquidityCall__Inputs {
    return new RemoveLiquidityCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityCall__Outputs {
    return new RemoveLiquidityCall__Outputs(this);
  }
}

export class RemoveLiquidityCall__Inputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get minAmounts(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RemoveLiquidityCall__Outputs {
  _call: RemoveLiquidityCall;

  constructor(call: RemoveLiquidityCall) {
    this._call = call;
  }

  get value0(): Array<BigInt> {
    return this._call.outputValues[0].value.toBigIntArray();
  }
}

export class RemoveLiquidityImbalanceCall extends ethereum.Call {
  get inputs(): RemoveLiquidityImbalanceCall__Inputs {
    return new RemoveLiquidityImbalanceCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityImbalanceCall__Outputs {
    return new RemoveLiquidityImbalanceCall__Outputs(this);
  }
}

export class RemoveLiquidityImbalanceCall__Inputs {
  _call: RemoveLiquidityImbalanceCall;

  constructor(call: RemoveLiquidityImbalanceCall) {
    this._call = call;
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }

  get maxBurnAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class RemoveLiquidityImbalanceCall__Outputs {
  _call: RemoveLiquidityImbalanceCall;

  constructor(call: RemoveLiquidityImbalanceCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class RemoveLiquidityOneTokenCall extends ethereum.Call {
  get inputs(): RemoveLiquidityOneTokenCall__Inputs {
    return new RemoveLiquidityOneTokenCall__Inputs(this);
  }

  get outputs(): RemoveLiquidityOneTokenCall__Outputs {
    return new RemoveLiquidityOneTokenCall__Outputs(this);
  }
}

export class RemoveLiquidityOneTokenCall__Inputs {
  _call: RemoveLiquidityOneTokenCall;

  constructor(call: RemoveLiquidityOneTokenCall) {
    this._call = call;
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tokenIndex(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get minAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class RemoveLiquidityOneTokenCall__Outputs {
  _call: RemoveLiquidityOneTokenCall;

  constructor(call: RemoveLiquidityOneTokenCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SwapCall extends ethereum.Call {
  get inputs(): SwapCall__Inputs {
    return new SwapCall__Inputs(this);
  }

  get outputs(): SwapCall__Outputs {
    return new SwapCall__Outputs(this);
  }
}

export class SwapCall__Inputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get tokenIndexFrom(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get tokenIndexTo(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get dx(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get minDy(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class SwapCall__Outputs {
  _call: SwapCall;

  constructor(call: SwapCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class UpdateUserWithdrawFeeCall extends ethereum.Call {
  get inputs(): UpdateUserWithdrawFeeCall__Inputs {
    return new UpdateUserWithdrawFeeCall__Inputs(this);
  }

  get outputs(): UpdateUserWithdrawFeeCall__Outputs {
    return new UpdateUserWithdrawFeeCall__Outputs(this);
  }
}

export class UpdateUserWithdrawFeeCall__Inputs {
  _call: UpdateUserWithdrawFeeCall;

  constructor(call: UpdateUserWithdrawFeeCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get transferAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateUserWithdrawFeeCall__Outputs {
  _call: UpdateUserWithdrawFeeCall;

  constructor(call: UpdateUserWithdrawFeeCall) {
    this._call = call;
  }
}
