import { describe, expect, it } from "vitest";

import {
  buildGfnWebRtcPeerInfo,
  GFN_WEBRTC_CLIENT_PEER_ROLE,
} from "./signaling";

describe("GFN WebRTC signaling peer info", () => {
  it("uses the same client role as the sign-in protocol", () => {
    const peerInfo = buildGfnWebRtcPeerInfo(0, "peer-test");

    expect(GFN_WEBRTC_CLIENT_PEER_ROLE).toBe(1);
    expect(peerInfo.peerRole).toBe(GFN_WEBRTC_CLIENT_PEER_ROLE);
  });
});
