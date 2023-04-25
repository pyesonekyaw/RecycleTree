import gradio as gr
from huggingface_hub import from_pretrained_fastai
import os
os.environ["HF_ENDPOINT"] = "https://huggingface.co"

materials_model = from_pretrained_fastai("pyesonekyaw/recycletree_materials")
paper_model = from_pretrained_fastai("pyesonekyaw/recycletree_paper")
plastic_model = from_pretrained_fastai("pyesonekyaw/recycletree_plastic")
metal_model = from_pretrained_fastai("pyesonekyaw/recycletree_metal")
others_model = from_pretrained_fastai("pyesonekyaw/recycletree_others")
glass_model = from_pretrained_fastai("pyesonekyaw/recycletree_glass")

examples = ["Examples/1.jpg", "Examples/2.jpg",
            "Examples/3.jpg", "Examples/4.jpg", "Examples/5.jpg"]

material_names = ['Glass', 'Metal', 'Others', 'Paper', 'Plastic']
plastic_names = ['CD Disk', 'Straw', 'Plastic Bag', 'Clothes Hanger', 'Plastic Container or Bottle',
                 'Disposable Cutlery', 'Plastic Packaging', 'Plastic Packaging With Foil', 'Styrofoam']
paper_names = ['Beverage Carton', 'Cardboard', 'Chopsticks', 'Disposables', 'Paper Bag', 'Paper Packaging',
               'Paper Product', 'Receipt', 'Paper Roll', 'Paper Sheet', 'Tissue Box', 'Tissue Paper']
glass_names = ['Ceramic', 'Glassware', 'Lightbulb']
other_names = ['Battery', 'Electronic Waste', 'Stationery']
metal_names = ['Aerosol Can', 'Aluminium Foil or Tray', 'Metal Can or Container']

material_num_name_dict = {
  "metal": "Metal",
  "glass": "Glass",
  "paper": "Paper",
  "plastic": "Plastic",
  "others": "Others",
}

plastic_item_num_dict = {
  "CD Disk": ["Yes", "Nil"],
  "Straw": ["No, dispose as general waste","Nil"],
  "Plastic Bag": ["Yes, if they are not oxo- and bio- degradable bags", "Contaminated with food waste/liquid waste/other forms of waste "],
  "Clothes Hanger": ["Yes", "Made up of more than one plastic, if unsure, just dispose as normal waste "],
  "Plastic Container or Bottle": ["Yes", "When they are not emptied or not rinsed "],
  "Disposable Cutlery": ["No, dispose as general waste", "Nil"],
  "Plastic Packaging": ["Yes, for things like bubble wrap and egg tray but no if directly enclosing food like cling wrap", "Contaminated with food contents "],
  "Plastic Packaging With Foil": ["No","Nil"],
  "Styrofoam": ["No, dispose as general waste","Nil"]
}
glass_item_num_dict = {
  "Ceramic": ["No, donate if can be reused", "Nil"],
  "Glassware": ["Yes","If there is liquid/solid residue inside the glassware "],
  "Lightbulb": ["Could be recycled at specific collection points which can be found on onemap.sg, under Lighting waste collection points", "Nil"]
}
metal_item_num_dict = {
  "Aerosol Can": ["Yes","If there are any remaining contents in the can"],
  "Aluminium Foil or Tray": ["Yes","If there is any residue "],
  "Metal Can or Container": ["Yes","If there is any residue "]
}
others_item_num_dict = {
  "Battery": ["No, rechargeable batteries can be recycled through specific collection points (e-waste collection)", "Nil"],
  "Electronic Waste": ["Yes","Can be recycled through specific collection points (e-waste collection)"],
  "Stationery": ["No","No, donate if can be reused"]
}
paper_item_num_dict = {
  "Beverage Carton": ["Yes, rinsed and flattened","Nil"],
  "Cardboard": ["Yes","Remains of other materials such as tape, contaminated with other waste"],
  "Chopsticks": ["No, dispose as general waste ",],
  "Disposables": ["No, dispose as general waste ",],
  "Paper Bag": ["Yes","Contaminated with food waste or other waste "],
  "Paper Packaging": ["Yes","Made up of more than one material or contaminated with food waste"],
  "Paper Product": ["Yes","Contaminated with other waste"],
  "Receipt": ["Yes","Contaminated with other waste"],
  "Paper Roll": ["Yes","Contaminated with other waste"],
  "Paper Sheet": ["Yes","Contaminated with other waste "],
  "Tissue Box": ["Yes","Plastic liners not removed or contaminated with other waste "],
  "Tissue Paper": ["No, dispose as general waste","Nil"]
}



def predict_image(inp):
    """
    Performs inference for a given input image and returns the prediction and CAM image.
    """
    material_label, material_label_idx, material_probs = materials_model.predict(inp)
    material_preds = {name: prob for name, prob in zip(material_names, material_probs.tolist())}

    if material_label == 'paper':
        specific_label, specific_label_idx, specific_probs = paper_model.predict(inp)
        specific_preds = {name: prob for name, prob in zip(paper_names, specific_probs.tolist())}
        specific_label = paper_names[int(specific_label_idx)]
        recyclable_qn = paper_item_num_dict[specific_label][0]
        recyclable_advice = paper_item_num_dict[specific_label][1]

    elif material_label == 'plastic':
        specific_label, specific_label_idx, specific_probs = plastic_model.predict(inp)
        specific_preds = {name: prob for name, prob in zip(plastic_names, specific_probs.tolist())}
        specific_label = plastic_names[int(specific_label_idx)]
        recyclable_qn = plastic_item_num_dict[specific_label][0]
        recyclable_advice = plastic_item_num_dict[specific_label][1]

    elif material_label == 'glass':
        specific_label, specific_label_idx, specific_probs = glass_model.predict(inp)
        specific_preds = {name: prob for name, prob in zip(glass_names, specific_probs.tolist())}
        specific_label = glass_names[int(specific_label_idx)]
        recyclable_qn = glass_item_num_dict[specific_label][0]
        recyclable_advice = glass_item_num_dict[specific_label][1]

    elif material_label == 'metal':
        specific_label, specific_label_idx, specific_probs = metal_model.predict(inp)
        specific_preds = {name: prob for name, prob in zip(metal_names, specific_probs.tolist())}
        specific_label = metal_names[int(specific_label_idx)]
        recyclable_qn = metal_item_num_dict[specific_label][0]
        recyclable_advice = metal_item_num_dict[specific_label][1]

    elif material_label == 'others':
        specific_label, specific_label_idx, specific_probs = others_model.predict(inp)
        specific_preds = {name: prob for name, prob in zip(other_names, specific_probs.tolist())}
        specific_label = other_names[int(specific_label_idx)]
        recyclable_qn = others_item_num_dict[specific_label][0]
        recyclable_advice = others_item_num_dict[specific_label][1]

    return material_preds, specific_preds, recyclable_qn, recyclable_advice


with gr.Blocks(title="Trash Classification", css="#custom_header {min-height: 3rem} #custom_title {min-height: 3rem; text-align: center}") as demo:
    gr.Markdown("# Check whether your trash is recyclable or not!", elem_id="custom_title")
    gr.Markdown("Gradio Inference interface for classification of trash and recyclables. To use it, simply upload your image, or click one of the examples to load them. Images uploaded are never saved or indexed.", elem_id="custom_title")

    with gr.Column():
        with gr.Column():
            with gr.Box():
                gr.Markdown("## Inputs", elem_id="custom_header")
                input_image = gr.Image(label="Input Image")
                input_image.style(height=240)
                btn = gr.Button(value="Submit")
                btn.style(full_width=True)
        with gr.Column():
            with gr.Box():
                gr.Markdown("## Outputs", elem_id="custom_header")
                recycling_qn = gr.outputs.Textbox(label="Is this recyclable?")
                recycling_advice = gr.outputs.Textbox(label="It is not recyclable when:")
                with gr.Row():
                    material_probs = gr.outputs.Label(label="Material Prediction")
                    item_probs = gr.outputs.Label(label="Item Prediction")
                
    gr.Examples(
        examples=examples,
        inputs=input_image,
        fn=predict_image,
        cache_examples=False,
    )

    btn.click(predict_image, inputs=[input_image],
              outputs=[material_probs, item_probs, recycling_qn, recycling_advice])
if __name__ == "__main__":
    demo.launch()
