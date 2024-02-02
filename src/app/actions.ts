"use server"

import { revalidateTag } from "next/cache"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { retrieveRegion } from "@lib/data"

import { updateCartRegion } from "@modules/cart/actions"
import { medusaClient } from "@lib/config"

/**
 * Retrieves the region based on the regionId cookie
 */
export async function getRegion() {
  const regionCookie = cookies().get("_medusa_region")?.value

  if (!regionCookie) {
    console.log("No region cookie")
    return null
  }

  let { regionId } = JSON.parse(regionCookie)

  medusaClient.regions.list()
  .then(({ regions }) => {
    regions.map((region) => {
      if(region.name === "India"){
        regionId = region.id
      }
    })
    // show customers available regions
  })

  console.log("regionId",regionId)

  if (!regionId) {
    console.log("No region ID")
    return null
  }

  try {
    const region = await retrieveRegion(regionId).then((region) => region)
    return region
  } catch (e: any) {
    console.log(e.toString())
    return null
  }
}

/**
 * Updates the regionId cookie and revalidates the regions cache
 * @param regionId
 * @param countryCode
 */
export async function updateRegion(regionId: string, countryCode: string) {
  cookies().set("_medusa_region", JSON.stringify({ regionId, countryCode }))
  revalidateTag("regions")
  await updateCartRegion(regionId)
}

export async function resetOnboardingState(orderId: string) {
  cookies().set("_medusa_onboarding", "false", { maxAge: -1 })
  redirect(`http://localhost:7001/a/orders/${orderId}`)
}
