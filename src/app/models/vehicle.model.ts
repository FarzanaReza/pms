export interface Vehicle {
    id?: number | null;
	ownerName?: string; 
    vehicleType?: string;
    licenseNumber?: string; 
    entryTime?: string; 
    exitTime?: string; 
    status?: string; 
    ownerPhone?: string; 
    ownerAddress?: string; 
    parkingCharge?: number | null; 
}