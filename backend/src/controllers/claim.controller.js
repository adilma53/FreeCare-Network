// import * as claimService from "../services/claim.service.js";

// // create one ✅
// export async function createClaim(req, res) {
//   try {
//     const claim = await claimService.createClaim(req.body);
//     if (claim) {
//       res.status(200).json(claim);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // get one by id
// export async function getClaim(req, res) {
//   try {
//     const claim = await claimService.getClaimById(req.params.id);
//     if (claim) {
//       res.status(200).json(claim);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // get all
// export async function getClaims(req, res) {
//   try {
//     const claim = await claimService.getAllClaims();
//     if (claim) {
//       res.status(200).json(claim);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // update one by id
// export async function createClaim(req, res) {
//   try {
//     const claim = await claimService.createClaim(req.body);
//     if (claim) {
//       res.status(200).json(claim);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }

// // delete one by id
// export async function deleteClaim(req, res) {
//   try {
//     const claim = await claimService.deleteClaimById(req.params.id);
//     if (claim) {
//       res.status(200).json(claim);
//     } else {
//       res.status(400).send();
//     }
//   } catch (err) {
//     res.status(500).json({ errorMessage: err.message });
//   }
// }
