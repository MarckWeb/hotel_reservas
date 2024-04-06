import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ServicesDocument = Services & Document

@Schema()
export class Services {
   @Prop()
   title: string;

   @Prop()
   description: string;

   @Prop()
   image: string;

   @Prop({ default: Date.now() })
   updatedAt: Date;

   @Prop({ default: Date.now() })
   createdAt: Date;

}

const serviceSchema = SchemaFactory.createForClass(Services)
export { serviceSchema }